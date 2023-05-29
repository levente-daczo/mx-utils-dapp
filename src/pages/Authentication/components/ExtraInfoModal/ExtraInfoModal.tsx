import React, { ChangeEvent, useState } from 'react';

import { ExtraInfoModalProps, FieldType } from './types';
import { Modal } from 'react-bootstrap';

import styles from './styles.module.scss';
import { CloseIcon } from 'assets/img/CloseIcon';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';

export const ExtraInfoModal = ({
  show,
  setShow,
  setExtraInfo
}: ExtraInfoModalProps) => {
  const [fields, setFields] = useState<FieldType[]>([
    {
      label: '',
      value: ''
    }
  ]);

  const handleChangeField = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    setFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index] = { ...updatedFields[index], [name]: value };
      return updatedFields;
    });
  };

  const handleDeleteField = (index: number) => {
    setFields(fields.filter((_, idx) => idx !== index));
  };

  const handleAddField = () => {
    setFields([...fields, { value: '', label: '' }]);
  };

  const handleSaveFields = () => {
    const filteredFields = fields.filter((field) => field.label && field.value);

    const extraInfoData = filteredFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.label]: field.value
      };
    }, {});

    setExtraInfo((prevExtraInfo: any) => ({
      ...prevExtraInfo,
      ...extraInfoData
    }));
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      keyboard={false}
      backdrop='static'
      animation={false}
      centered={true}
      className={styles.modal}
      dialogClassName={styles.dialog}
    >
      <div className={styles.unlock}>
        <div className={styles.heading}>
          <div className={styles.title}>Extra Info</div>
          <div className={styles.close} onClick={onClose}>
            <CloseIcon />
          </div>
        </div>

        <div className={styles.fields}>
          {fields.map((field, index) => (
            <div className={styles.field} key={index}>
              <div className={styles.group}>
                <label className={styles.label}>Label</label>
                <input
                  className={styles.input}
                  name='label'
                  value={field.label}
                  onChange={(e) => handleChangeField(e, index)}
                />
              </div>

              <div className={styles.group}>
                <label className={styles.label}>Value</label>
                <input
                  className={styles.input}
                  name='value'
                  value={field.value}
                  onChange={(e) => handleChangeField(e, index)}
                />
              </div>
              <button
                className={styles.delete}
                onClick={() => handleDeleteField(index)}
              >
                <FontAwesomeIcon icon={faMultiply} size='sm' />
              </button>
            </div>
          ))}
        </div>

        <div className={styles.buttons}>
          <button
            type='button'
            className={classNames(styles.button, {
              [styles.disabled]: fields.length > 3
            })}
            onClick={handleAddField}
            disabled={fields.length > 3}
          >
            Add
          </button>

          <button
            type='button'
            className={styles.button}
            onClick={handleSaveFields}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};
