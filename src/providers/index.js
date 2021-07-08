import { ValueProvider } from "./ValueContext";
import { MachineryProvider } from "./MachineryContext";
import { EmployeesProvider } from "./EmployeesContext";
import { SausageProvider } from "./SausageContext";
import { ChickenProvider } from "./ChickenContext";
import { CutChickenProvider } from "./CutChickenContext";
import { FriesProvider } from "./FriesContext";
import { RawMaterialProvider } from "./RawMaterialContext";

const Providers = ({ children }) => {
  return (
    <RawMaterialProvider>
      <FriesProvider>
        <CutChickenProvider>
          <ChickenProvider>
            <SausageProvider>
              <EmployeesProvider>
                <MachineryProvider>
                  <ValueProvider>{children}</ValueProvider>
                </MachineryProvider>
              </EmployeesProvider>
            </SausageProvider>
          </ChickenProvider>
        </CutChickenProvider>
      </FriesProvider>
    </RawMaterialProvider>
  );
};

export default Providers;
