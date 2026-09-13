import { useState, useContext, useEffect } from 'react';
import { ActiveSectionContext } from '../API/ActiveSectionContext';
import useIsInViewport from '../API/useIsInViewport';
import useFetch from '../API/useFetch';
import { emailValidator } from '../utils';

const INITIAL_FORM_VALUES = { name: '', email: '', message: '' };

function getFieldErrors(values) {
	const errors = {};
	if (!values.name.trim()) errors.name = 'Please enter your name.';
	if (!values.email.trim()) errors.email = 'Please enter your email address.';
	else if (!emailValidator(values.email))
		errors.email = 'Please enter a valid email address.';
	if (!values.message.trim()) errors.message = 'Please write a message.';
	return errors;
}

export default function ContactForm() {
	const { setActiveSection } = useContext(ActiveSectionContext);
	const [setRef, isVisible] = useIsInViewport();
	const [result, isSending, error, send, updateOptions, reset] = useFetch(
		'https://formspree.io/f/xyyojjyj',
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		true,
	);
	const [values, setValues] = useState(INITIAL_FORM_VALUES);
	const [touched, setTouched] = useState({});
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (isVisible) setActiveSection('contactMe');
	}, [isVisible, setActiveSection]);

	function updateField(field, value) {
		const nextValues = { ...values, [field]: value };
		setValues(nextValues);
		if (touched[field]) setErrors(getFieldErrors(nextValues));
	}

	function validateField(field) {
		setTouched((currentTouched) => ({ ...currentTouched, [field]: true }));
		setErrors(getFieldErrors(values));
	}

	function submitForm(event) {
		event.preventDefault();
		const nextErrors = getFieldErrors(values);
		setTouched({ name: true, email: true, message: true });
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length) return;
		updateOptions({ body: JSON.stringify(values) });
		send();
	}

	function sendAnotherMessage() {
		reset();
		setValues(INITIAL_FORM_VALUES);
		setTouched({});
		setErrors({});
	}

	return (
		<div
			className="contactFormWrapper"
			ref={(node) => setRef(node)}
			id="contactMe"
		>
			{result ? (
				<output className="formSuccess" aria-live="polite">
					<span className="formSuccessCheck" aria-hidden="true">
						✓
					</span>
					<h2>Message sent</h2>
					<p>I’ll be in touch shortly.</p>
					<button
						type="button"
						className="sendAnother"
						onClick={sendAnotherMessage}
					>
						Send another message
					</button>
				</output>
			) : (
				<form className="contactForm" onSubmit={submitForm} noValidate>
					<div className="row">
						<div className="medium-12 columns medium-centered text-center">
							<h2>Let’s get in touch!</h2>
							{error && (
								<p className="formRequestError" role="alert">
									Something went wrong. Your message is still here — please try
									again.
								</p>
							)}
						</div>
					</div>
					<div className="row">
						<Field
							field="name"
							label="Name"
							values={values}
							touched={touched}
							errors={errors}
							updateField={updateField}
							validateField={validateField}
						/>
						<Field
							field="email"
							label="Email"
							type="email"
							values={values}
							touched={touched}
							errors={errors}
							updateField={updateField}
							validateField={validateField}
						/>
					</div>
					<div className="row">
						<Field
							field="message"
							label="Message"
							multiline
							values={values}
							touched={touched}
							errors={errors}
							updateField={updateField}
							validateField={validateField}
						/>
						<div className="medium-12 columns">
							<button
								type="submit"
								className="button sendForm"
								disabled={isSending}
							>
								{isSending && (
									<span className="buttonSpinner" aria-hidden="true" />
								)}
								{isSending ? 'Sending…' : 'Send message'}
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
}

function Field({
	field,
	label,
	type = 'text',
	multiline = false,
	values,
	touched,
	errors,
	updateField,
	validateField,
}) {
	const errorId = `${field}-error`;
	const hasError = Boolean(touched[field] && errors[field]);
	const commonProps = {
		id: field,
		name: field,
		value: values[field],
		onChange: (event) => updateField(field, event.target.value),
		onBlur: () => validateField(field),
		'aria-invalid': hasError,
		'aria-describedby': hasError ? errorId : undefined,
		placeholder: ' ',
	};

	return (
		<div
			className={`${multiline ? 'medium-12' : 'medium-6'} columns formField ${hasError ? 'hasError' : ''}`}
		>
			<div className="fieldControl">
				{multiline ? (
					<textarea {...commonProps} rows="5" />
				) : (
					<input {...commonProps} type={type} />
				)}
				<label htmlFor={field}>{label}</label>
			</div>
			{hasError && (
				<span className="fieldError" id={errorId}>
					{errors[field]}
				</span>
			)}
		</div>
	);
}
