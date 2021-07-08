import { useEffect } from "react";

import {
  Container,
  ContainerCards,
  TitleCard,
  InfoContainer,
  PrimaryInfoContainer,
  SecondInfoContainer,
  RadiusSecondInfoContainer,
  ButtonCheckedProvider,
  ButtonOnCheckedProvider,
  PaymentOn,
  PaymentOff,
  PriceContainer,
  FooterProvider,
  LeftFooterProvider,
  RightFooterProvider,
} from "./style";

const ProviderCard = ({
  Supplier,
  title1,
  title2,
  title3,
  provider1,
  setProvider1,
  minQuant1,
  precoBase1,
  leadTime1,
  atraso1,
  confiabilidade1,
  desconto1,
  inCash1,
  setInCash1,
  thirtyDays1,
  setThirtyDays1,
  total1,
  setTotal1,
  amount1,
  setAmount1,
  provider2,
  setProvider2,
  minQuant2,
  precoBase2,
  leadTime2,
  atraso2,
  confiabilidade2,
  desconto2,
  inCash2,
  setInCash2,
  thirtyDays2,
  setThirtyDays2,
  sixtyDays2,
  setSixtyDays2,
  total2,
  setTotal2,
  amount2,
  setAmount2,
  provider3,
  setProvider3,
  minQuant3,
  precoBase3,
  leadTime3,
  atraso3,
  confiabilidade3,
  desconto3,
  inCash3,
  setInCash3,
  thirtyDays3,
  setThirtyDays3,
  sixtyDays3,
  setSixtyDays3,
  total3,
  setTotal3,
  amount3,
  setAmount3,
}) => {
  const handleProvider = (provider) => {
    switch (provider) {
      case "provider1":
        setProvider1(!provider1);
        break;
      case "provider2":
        setProvider2(!provider2);
        break;
      case "provider3":
        setProvider3(!provider3);
        break;
      default:
        break;
    }
  };
  const handleSubButon = (sub) => {
    switch (sub) {
      case "inCash1":
        setInCash1(true);
        setThirtyDays1(false);

        break;
      case "thirtyDays1":
        setInCash1(false);
        setThirtyDays1(true);
        break;

      case "inCash2":
        setInCash2(true);
        setThirtyDays2(false);
        setSixtyDays2(false);
        break;
      case "thirtyDays2":
        setInCash2(false);
        setThirtyDays2(true);
        setSixtyDays2(false);
        break;
      case "sixtyDays2":
        setThirtyDays2(false);
        setInCash2(false);
        setSixtyDays2(true);
        break;

      case "inCash3":
        setInCash3(true);
        setThirtyDays3(false);
        setSixtyDays3(false);
        break;
      case "thirtyDays3":
        setInCash3(false);
        setThirtyDays3(true);
        setSixtyDays3(false);
        break;
      case "sixtyDays3":
        setThirtyDays3(false);
        setInCash3(false);
        setSixtyDays3(true);
        break;

      default:
        break;
    }
  };

  const handleSale1 = (event) => {
    setAmount1(event);
    setTotal1(event * Supplier.fornecedorA.precoBase);
  };
  const handleSale2 = (event) => {
    setAmount2(event);
    setTotal2(event * Supplier.fornecedorB.precoBase);
  };
  const handleSale3 = (event) => {
    setAmount3(event);
    setTotal3(event * Supplier.fornecedorC.precoBase);
  };

  useEffect(() => {
    setProvider1(provider1);
    setInCash1(inCash1);
    setThirtyDays1(thirtyDays1);
    setProvider2(provider2);
    setInCash2(inCash2);
    setThirtyDays2(thirtyDays2);
    setSixtyDays2(sixtyDays2);

    //   {title3 !== null &&
    // setProvider3(provider3);
    //   setInCash3(inCash3)
    //   setThirtyDays3(thirtyDays3)
    //   setSixtyDays3(sixtyDays3)
    // }
  }, [
    provider1,
    setProvider1,
    inCash1,
    setInCash1,
    thirtyDays1,
    setThirtyDays1,
    provider2,
    setProvider2,
    inCash2,
    setInCash2,
    thirtyDays2,
    setThirtyDays2,
    sixtyDays2,
    setSixtyDays2,
    provider3,
    setProvider3,
    inCash3,
    setInCash3,
    thirtyDays3,
    setThirtyDays3,
    sixtyDays3,
    setSixtyDays3,
  ]);
  return (
    <Container>
      <ContainerCards>
        <TitleCard>
          <div />
          {title1}
          {provider1 ? (
            <ButtonOnCheckedProvider
              onClick={() => handleProvider("provider1")}
            />
          ) : (
            <ButtonCheckedProvider
              onClick={() => handleProvider("provider1")}
            />
          )}
        </TitleCard>

        <h3>Informações</h3>
        <InfoContainer>
          <PrimaryInfoContainer>
            <p>
              Quantidade Mínima: <span>{minQuant1}</span>
            </p>
            <p>
              Lead Time: <span>{leadTime1}</span>
            </p>
            <p>
              Atraso: <span>{atraso1}</span>
            </p>
            <p>
              Confiabilidade: <span>{confiabilidade1}</span>
            </p>
          </PrimaryInfoContainer>
          <SecondInfoContainer>
            <p>
              <span>Pagamento</span>
              <span>Juros</span>
            </p>
            <RadiusSecondInfoContainer>
              <p>á vista</p>
              <span>0%</span>
              {provider1 ? (
                inCash1 ? (
                  <PaymentOn onClick={() => handleSubButon("inCash1")} />
                ) : (
                  <PaymentOff onClick={() => handleSubButon("inCash1")} />
                )
              ) : (
                <PaymentOff />
              )}
            </RadiusSecondInfoContainer>
            <RadiusSecondInfoContainer>
              <p>30 dias</p>
              <span>5%</span>
              {provider1 ? (
                thirtyDays1 ? (
                  <PaymentOn onClick={() => handleSubButon("thirtyDays1")} />
                ) : (
                  <PaymentOff onClick={() => handleSubButon("thirtyDays1")} />
                )
              ) : (
                <PaymentOff />
              )}
            </RadiusSecondInfoContainer>
          </SecondInfoContainer>
        </InfoContainer>
        <PriceContainer>
          <img src="./images/cifrao_fff.svg" alt="cifrao" />
          <p>Preço</p>
          <small>{`R$ ${precoBase1}`}</small>
        </PriceContainer>
        <FooterProvider>
          <LeftFooterProvider>
            <h2>Quantidade de compra</h2>
            {provider1 ? (
              <input
                onChange={(e) => handleSale1(e.target.value)}
                placeholder="Quantidade a comprar..."
              />
            ) : (
              <input placeholder="Quantidade a comprar..." />
            )}
          </LeftFooterProvider>
          <RightFooterProvider>
            <h2>Total</h2>
            <p>
              {`R$ ${total1}`}
              <img src="./images/cifrao.svg" alt="cifrao" />
            </p>
          </RightFooterProvider>
        </FooterProvider>
      </ContainerCards>

      <ContainerCards>
        <TitleCard>
          <div />
          {title2}
          {provider2 ? (
            <ButtonOnCheckedProvider
              onClick={() => handleProvider("provider2")}
            />
          ) : (
            <ButtonCheckedProvider
              onClick={() => handleProvider("provider2")}
            />
          )}
        </TitleCard>

        <h3>Informações</h3>
        <InfoContainer>
          <PrimaryInfoContainer>
            <p>
              Quantidade Mínima: <span>{minQuant2}</span>
            </p>
            <p>
              Lead Time: <span>{leadTime2}</span>
            </p>
            <p>
              Atraso: <span>{atraso2}</span>
            </p>
            <p>
              Confiabilidade: <span>{confiabilidade2}</span>
            </p>
          </PrimaryInfoContainer>
          <SecondInfoContainer>
            <p>
              <span>Pagamento</span>
              <span>Juros</span>
            </p>
            <RadiusSecondInfoContainer>
              <p>á vista</p>
              <span>2%</span>
              {provider2 ? (
                inCash2 ? (
                  <PaymentOn onClick={() => handleSubButon("inCash2")} />
                ) : (
                  <PaymentOff onClick={() => handleSubButon("inCash2")} />
                )
              ) : (
                <PaymentOff />
              )}
            </RadiusSecondInfoContainer>
            <RadiusSecondInfoContainer>
              <p>30 dias</p>
              <span>5%</span>
              {provider2 ? (
                thirtyDays2 ? (
                  <PaymentOn onClick={() => handleSubButon("thirtyDays2")} />
                ) : (
                  <PaymentOff onClick={() => handleSubButon("thirtyDays2")} />
                )
              ) : (
                <PaymentOff />
              )}
            </RadiusSecondInfoContainer>
            <RadiusSecondInfoContainer>
              <p>60 dias</p>
              <span>10%</span>
              {provider2 ? (
                sixtyDays2 ? (
                  <PaymentOn onClick={() => handleSubButon("sixtyDays2")} />
                ) : (
                  <PaymentOff onClick={() => handleSubButon("sixtyDays2")} />
                )
              ) : (
                <PaymentOff />
              )}
            </RadiusSecondInfoContainer>
          </SecondInfoContainer>
        </InfoContainer>
        <PriceContainer>
          <img src="./images/cifrao_fff.svg" alt="cifrao" />
          <p>Preço</p>
          <small>{`R$ ${precoBase2}`}</small>
        </PriceContainer>
        <FooterProvider>
          <LeftFooterProvider>
            <h2>Quantidade de compra</h2>
            {provider2 ? (
              <input
                onChange={(e) => handleSale2(e.target.value)}
                placeholder="Quantidade a comprar..."
              />
            ) : (
              <input placeholder="Quantidade a comprar..." />
            )}
          </LeftFooterProvider>
          <RightFooterProvider>
            <h2>Total</h2>
            <p>
              {`R$ ${total2}`} <img src="./images/cifrao.svg" alt="cifrao" />
            </p>
          </RightFooterProvider>
        </FooterProvider>
      </ContainerCards>

      {title3 !== null && (
        <ContainerCards>
          <TitleCard>
            <div />
            {title3}
            {provider3 ? (
              <ButtonOnCheckedProvider
                onClick={() => handleProvider("provider3")}
              />
            ) : (
              <ButtonCheckedProvider
                onClick={() => handleProvider("provider3")}
              />
            )}
          </TitleCard>

          <h3>Informações</h3>
          <InfoContainer>
            <PrimaryInfoContainer>
              <p>
                Quantidade Mínima: <span>{minQuant3}</span>
              </p>
              <p>
                Lead Time: <span>{leadTime3}</span>
              </p>
              <p>
                Atraso: <span>{atraso3}</span>
              </p>
              <p>
                Confiabilidade: <span>{confiabilidade3}</span>
              </p>
            </PrimaryInfoContainer>
            <SecondInfoContainer>
              <p>
                <span>Pagamento</span>
                <span>Juros</span>
              </p>
              <RadiusSecondInfoContainer>
                <p>á vista</p>
                <span>0%</span>
                {provider3 ? (
                  inCash3 ? (
                    <PaymentOn onClick={() => handleSubButon("inCash3")} />
                  ) : (
                    <PaymentOff onClick={() => handleSubButon("inCash3")} />
                  )
                ) : (
                  <PaymentOff />
                )}
              </RadiusSecondInfoContainer>
              <RadiusSecondInfoContainer>
                <p>30 dias</p>
                <span>5%</span>
                {provider3 ? (
                  thirtyDays3 ? (
                    <PaymentOn onClick={() => handleSubButon("thirtyDays3")} />
                  ) : (
                    <PaymentOff onClick={() => handleSubButon("thirtyDays3")} />
                  )
                ) : (
                  <PaymentOff />
                )}
              </RadiusSecondInfoContainer>
              <RadiusSecondInfoContainer>
                <p>60 dias</p>
                <span>10%</span>
                {provider3 ? (
                  sixtyDays3 ? (
                    <PaymentOn onClick={() => handleSubButon("sixtyDays3")} />
                  ) : (
                    <PaymentOff onClick={() => handleSubButon("sixtyDays3")} />
                  )
                ) : (
                  <PaymentOff />
                )}
              </RadiusSecondInfoContainer>
            </SecondInfoContainer>
          </InfoContainer>
          <PriceContainer>
            <img src="./images/cifrao_fff.svg" alt="cifrao" />
            <p>Preço</p>
            <small>{`R$ ${precoBase3}`}</small>
          </PriceContainer>
          <FooterProvider>
            <LeftFooterProvider>
              <h2>Quantidade de compra</h2>
              {provider2 ? (
                <input
                  onChange={(e) => handleSale3(e.target.value)}
                  placeholder="Quantidade a comprar..."
                />
              ) : (
                <input placeholder="Quantidade a comprar..." />
              )}
            </LeftFooterProvider>
            <RightFooterProvider>
              <h2>Total</h2>
              <p>
                {`R$ ${total3}`} <img src="./images/cifrao.svg" alt="cifrao" />
              </p>
            </RightFooterProvider>
          </FooterProvider>
        </ContainerCards>
      )}
    </Container>
  );
};
export default ProviderCard;
