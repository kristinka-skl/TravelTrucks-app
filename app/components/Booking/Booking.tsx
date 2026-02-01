import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './Booking.module.css';
import CalendarDatePicker from '../CalendarDatePicker/CalendarDatePicker';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import Button from '../Button/Button';
interface BookingFormValues {
  name: string;
  email: string;
  date: string;
  comment: string;
}
export default function Booking() {
  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };
  const BookingFormSchema = Yup.object().shape({
    name: Yup.string().trim().required(),
    email: Yup.string().email().required(),
    date: Yup.string().required(),
    comment: Yup.string().trim().optional(),
  });
  const handleSubmit = (values: BookingFormValues) => {
    toast.success('Successfully booked!');
  };
  return (
    <>
      <div className={css.formHeading}>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookingFormSchema}
      >
        <Form className={css.form}>
          <fieldset className={css.formList}>
            <Field
              className={css.formInput}
              type="text"
              name="name"
              placeholder="Name*"
            ></Field>
            {/* <ErrorMessage name="name" component="span" className={css.error} /> */}
            <Field
              className={css.formInput}
              type="email"
              name="email"
              placeholder="Email*"
            ></Field>
            {/* <ErrorMessage name="email" component="span" className={css.error} /> */}
            <Field
              className={css.formInput}
              component={CalendarDatePicker}
              name="date"
              placeholderText="Booking date*"
            ></Field>
            {/* <ErrorMessage name="date" component="span" className={css.error} /> */}
            <Field
              className={`${css.formInput} ${css.commentInput}`}
              component="textarea"
              name="comment"
              placeholder="Comment"
              rows="4"
            ></Field>
          </fieldset>
          <Button type="submit" primary>
            Send
          </Button>
        </Form>
      </Formik>
    </>
  );
}
