import type { EnvironmentsEnum } from '@multiversx/sdk-dapp/types';
import type { Dispatch, SetStateAction } from 'react';
import { ExtraInfoType } from '../Input/types';

export interface GenerateTokenModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  chain: EnvironmentsEnum;
  callbackAfterLogin?: () => void;
  extraInfo?: ExtraInfoType;
}
