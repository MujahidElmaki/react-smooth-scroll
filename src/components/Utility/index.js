import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';

import {
  UtilityContainer,
  UtilityH1,
  UtilityWrapper,
  UtilityCard,
  UtilityIcon,
  UtilityH2,
  UtilityP,
} from './UtilityElements';

function Utility() {
  return (
    <>
      <UtilityContainer id="utility">
        <UtilityH1>Dive into the Utilites</UtilityH1>
        <UtilityWrapper>
          <UtilityCard>
            <UtilityIcon src={Icon1} />
            <UtilityH2>Cryptography</UtilityH2>
            <UtilityP>
              Check out the listings of every NFT ever made under metafruits.
            </UtilityP>
          </UtilityCard>
          <UtilityCard>
            <UtilityIcon src={Icon2} />
            <UtilityH2>Start Minting</UtilityH2>
            <UtilityP>
              The rarity you get will be unique! Along with a special after
              effect.
            </UtilityP>
          </UtilityCard>
          <UtilityCard>
            <UtilityIcon src={Icon3} />
            <UtilityH2>Stay tuned</UtilityH2>
            <UtilityP>
              Follow us on twitter and join our discord server, links down
              below.
            </UtilityP>
          </UtilityCard>
        </UtilityWrapper>
      </UtilityContainer>
    </>
  );
}

export default Utility;
