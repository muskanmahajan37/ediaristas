import SafeEnviroment from "ui/components/feedback/SafeEnviroment/SafeEnviroment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja os profissionais da sua localidade"
        }
      />

      <UserInformation
        name={"Michele Chan"}
        picture={"https://github.com/michelewtc.png"}
        rating={5}
        description={"São Paulo"}
      />
    </div>
  );
}
