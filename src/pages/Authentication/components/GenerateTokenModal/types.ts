import type { EnvironmentsEnum } from '@multiversx/sdk-dapp/types';
import type { Dispatch, SetStateAction } from 'react';

export interface GenerateTokenModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  extraInfo?: any;
  chain: EnvironmentsEnum;
  callbackAfterLogin?: () => void;
}
