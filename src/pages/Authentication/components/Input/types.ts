import type { SetStateAction, Dispatch } from 'react';
import type { EnvironmentsEnum } from '@multiversx/sdk-dapp/types';

import type { MetricType } from 'pages/Authentication/types';

export interface FormValuesType {
  token: string;
  message?: string;
}

export interface ExtraInfoType {
  [key: string]: string;
}

export interface InputPropsType {
  setMetrics: Dispatch<SetStateAction<MetricType>>;
  setChain: Dispatch<SetStateAction<EnvironmentsEnum>>;
  setShowGenerateTokenModal: Dispatch<SetStateAction<boolean>>;
  setShowExtraInfoModal: Dispatch<SetStateAction<boolean>>;
  extraInfo: ExtraInfoType;
  chain: EnvironmentsEnum;
}
