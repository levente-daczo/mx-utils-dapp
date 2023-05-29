import { Dispatch, SetStateAction } from 'react';

export interface ExtraInfoModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  setExtraInfo: Dispatch<SetStateAction<any>>;
}

export interface FieldType {
  label: string;
  value: string;
}
