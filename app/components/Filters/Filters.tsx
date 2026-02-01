'use client';
import { Field, Form, Formik } from 'formik';
import css from './Filters.module.css';
import { useId } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import * as Yup from 'yup';
import { FilterFormValues } from '@/app/types/camper';
import { useCamperFiltersStore } from '@/app/store/campersStore';
import { equipmentOptions, typeOptions } from '@/app/constants/constants';
import Button from '../Button/Button';

const FiltersFormSchema = Yup.object().shape({
  location: Yup.string().trim().optional(),
  equipment: Yup.array().of(Yup.string().optional()),
  type: Yup.string().optional(),
});
export default function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fieldId = useId();
  const { filters, setFilters, clearFilters } = useCamperFiltersStore();
  const isEmptyFilters = (filters: FilterFormValues) =>
    filters.location === '' &&
    filters.type === '' &&
    filters.equipment.length === 0;

  const handleResetFilters = (resetForm: () => void) => {
    resetForm();
    clearFilters();
    router.replace(pathname, { scroll: false });
  };
  const handleSubmit = (values: FilterFormValues) => {
    setFilters(values);
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
      initialValues={filters}
      onSubmit={handleSubmit}
      validationSchema={FiltersFormSchema}
      enableReinitialize
    >
      {({ values, resetForm }) => (
        <section className={css.filtersSection}>
          <Form className={css.form}>
            <fieldset>
              <div className={css.locationGroup}>
                <label htmlFor={`${fieldId}-location`}>Location</label>
                <div className={css.inputWrapper}>
                  <svg className={css.inputIcon} width={20} height={20}>
                    <use href="/sprite.svg#icon-map"></use>
                  </svg>
                  <Field
                    type="text"
                    name="location"
                    id={`${fieldId}-location`}
                    placeholder="City"
                    className={css.locationInput}
                  />
                </div>
              </div>
              <h3 className={css.filtersGroupTitle}>Filters</h3>
              <fieldset>
                <legend className={css.filterEquipmentTitle}>
                  Vehicle equipment
                </legend>
                <div className={css.filterEquipmentGroup}>
                  {Object.entries(equipmentOptions).map(
                    ([option, camperFeature]) => (
                      <label key={option} className={css.filterOptionLabel}>
                        <Field
                          type="checkbox"
                          name="equipment"
                          value={option}
                          className={css.hiddenInput}
                        />

                        <div className={css.filterOptionContent}>
                          <svg width="32" height="32" className={css.icon}>
                            <use href={`/sprite.svg#${camperFeature.icon}`} />
                          </svg>
                          <span className={css.labelText}>
                            {camperFeature.label}
                          </span>
                        </div>
                      </label>
                    )
                  )}
                </div>
              </fieldset>
              <fieldset>
                <legend className={css.filterTypeTitle}>Vehicle type</legend>
                <div
                  role="group"
                  aria-labelledby={`${fieldId}-type`}
                  className={css.filterTypeGroup}
                >
                  {Object.entries(typeOptions).map(([option, camperType]) => (
                    <label key={option} className={css.filterOptionLabel}>
                      <Field
                        type="radio"
                        name="type"
                        value={option}
                        className={css.hiddenInput}
                      />

                      <div
                        className={`
            ${css.filterOptionContent} 
            ${option === 'fullyIntegrated' ? css.fullyIntegratedCard : ''}
          `}
                      >
                        <svg width="32" height="32" className={css.icon}>
                          <use href={`/sprite.svg#${camperType.icon}`} />
                        </svg>
                        <span className={css.labelText}>
                          {camperType.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </fieldset>
            </fieldset>
            <div className={css.filterBtns}>
              <Button primary type="submit">
                {/* {isPending ? 'Searching' : 'Search'} */}Search
              </Button>
              {!isEmptyFilters(values) && (
                <Button
                  type="button"
                  onClick={() => handleResetFilters(resetForm)}
                >
                  Reset
                </Button>
              )}
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
}
