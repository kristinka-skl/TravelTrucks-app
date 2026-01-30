'use client';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import css from './Filters.module.css';
import { useId } from 'react';
interface FilterFormValues {
  location: string;
  equipment: string;
  type: string;
}
export default function Filters() {
  const initualValues = {
    location: '',
    equipment: '',
    type: '',
  };
  const fieldId = useId();
  const handleSubmit = (
    values: FilterFormValues,
    actions: FormikHelpers<FilterFormValues>
  ) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initualValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <fieldset>
          <label htmlFor={`${fieldId}-location`}>Location</label>
          <Field
            type="text"
            name="location"
            id={`${fieldId}-location`}
            placeholder="Kyiv, Ukraine"
          />

          <div id={`${fieldId}-equipment`}>Vehicle equipment</div>
          <div role="group" aria-labelledby={`${fieldId}-equipment`}>
            <label>
              <Field type="checkbox" name="equipment" value="AC" />
              AC
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="Automatic" />
              Automatic
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="Kitchen" />
              Kitchen
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="TV" />
              TV
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="Bathroom" />
              Bathroom
            </label>
          </div>

          <div id={`${fieldId}-type`}>Vehicle type</div>
          <div role="group" aria-labelledby={`${fieldId}-type`}>
            <label>
              <Field type="radio" name="type" value="Van" />
              Van
            </label>
            <label>
              <Field type="radio" name="type" value="Fully Integrated" />
              Fully Integrated
            </label>
            <label>
              <Field type="radio" name="type" value="Alcove" />
              Alcove
            </label>
          </div>
        </fieldset>
        <button className={css.searchBtn} type="submit">
          {/* {isPending ? 'Searching' : 'Search'} */}Search
        </button>
      </Form>
    </Formik>
  );
}
