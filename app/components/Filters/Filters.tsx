'use client';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import css from './Filters.module.css';
import { useId } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import * as Yup from 'yup';

interface FilterFormValues {
  location: string;
  equipment: string[];
  type: string;
}
const FiltersFormSchema = Yup.object().shape({
  location: Yup.string().trim().required('Location is required'),
  equipment: Yup.array().of(Yup.string().optional()),
  type: Yup.string().optional(),
});
export default function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fieldId = useId();

  const initialValues: FilterFormValues = {
    location: '',
    equipment: [],
    type: '',
  };

  const checkActiveFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('page');
    params.delete('limit');
    return params.toString().length > 0;
  };
  const hasFilters = checkActiveFilters();

  const handleResetFilters = (resetForm: () => void) => {
    resetForm(); // Очищає інпути Formik
    router.replace(pathname, { scroll: false }); // Прибирає всі параметри з URL
  };
  const handleSubmit = (
    values: FilterFormValues,
    actions: FormikHelpers<FilterFormValues>
  ) => {
    console.log(values);
    const params = new URLSearchParams(searchParams);
    if (values.location && values.location.trim() !== '') {
      const city = values.location.split(',')[0].trim();
      params.set('location', city);
    } else {
      params.delete('location');
    }
    if (values.type) {
      params.set('form', values.type);
    } else {
      params.delete('form');
    }
    params.delete('AC');
    params.delete('kitchen');
    params.delete('TV');
    params.delete('bathroom');
    params.delete('transmission');
    values.equipment.forEach((item) => {
      if (item === 'Automatic') {
        params.set('transmission', 'automatic');
      } else if (item === 'AC') {
        params.set('AC', 'true');
      } else if (item === 'TV') {
        params.set('TV', 'true');
      } else {
        params.set(item.toLowerCase(), 'true');
      }
    });
    params.set('page', '1');

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FiltersFormSchema}
      enableReinitialize
    >
      {({ resetForm }) => (
        <Form className={css.form}>
          <fieldset>
            <label htmlFor={`${fieldId}-location`}>Location</label>
            <Field
              type="text"
              name="location"
              id={`${fieldId}-location`}
              placeholder="Kyiv, Ukraine"
            />
            <ErrorMessage
              name="location"
              component="span"
              className={css.error}
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
              <ErrorMessage
                name="equipment"
                component="span"
                className={css.error}
              />
            </div>

            <div id={`${fieldId}-type`}>Vehicle type</div>
            <div role="group" aria-labelledby={`${fieldId}-type`}>
              <label>
                <Field type="radio" name="type" value="panelTruck" />
                Van
              </label>
              <label>
                <Field type="radio" name="type" value="fullyIntegrated" />
                Fully Integrated
              </label>
              <label>
                <Field type="radio" name="type" value="alcove" />
                Alcove
              </label>
            </div>
          </fieldset>
          <button className={css.searchBtn} type="submit">
            {/* {isPending ? 'Searching' : 'Search'} */}Search
          </button>

          {hasFilters && (
            <button
              className={css.resetBtn} // Стилізуйте цю кнопку (наприклад, сіра або прозора)
              type="button"
              onClick={() => handleResetFilters(resetForm)}
            >
              Reset
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
}
