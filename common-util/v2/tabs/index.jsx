import styled from 'styled-components';

import OldTab from '../../tabs/tab';
import OldTabs from '../../tabs';
import { TabPanel, Content } from '../../tabs/styles';

const Tabs = styled(OldTabs)`
  .tab-list {
    margin-bottom: 24px;
  }

  ${TabPanel} {
    padding: 0;
    background-color: transparent;
    border-radius: 0;
    border: 0;
  }

  ${Content} {
    background-color: transparent;
    border-radius: 0;
    border: 0;
  }
`;

export const Tab = styled(OldTab)`
  > a {
    line-height: 54px;
    width: 192px;
    text-align: center;
    font-family: GreycliffCF-Medium;
    padding: 0;
    border: none;
    border-bottom: 1px solid #DDDDDD;
  }

  &.active {
    > a {
      background: transparent;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: #1B8BE8 solid 2px;
      box-sizing: border-box;
      font-family: GreycliffCF-Bold;
      color: #1B8BE8;

      &:hover,
			&:focus {
				color: #1B8BE8;
				background-color: rgba(27, 139, 232, 0.05);
			}
    }
  }
`;

Tabs.Tab = Tab;

export default Tabs;
