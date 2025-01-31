interface ProfileType {
  name: string;
  description: string;
}
function Profile({ name, description }: ProfileType) {
  return (
    <div className="flex justify-center items-center">
      <div className="h-16 w-16  ">
        <img
          className="rounded-full"
          src={
            "https://s3-alpha-sig.figma.com/img/ffff/033a/efe4bcb3cff75c23caf607a158d35fa6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E6MthrLiCt3E5UfYW~8hHbdMr8vwUnodvWHY4Ha0OMDRPlaKCx4r~fGJB62gHF5A7gN4rNYmNXrezSmjaQqaPYvuhJU0rZFmhgQ1DzWinnkmkzo0~MesIQ7X0vvXayGazP39oIQKJ87MQ5jA0QSrXc8Vew6~KBPSs4tXzfAIkqlF4v6TbX2r83tn-Es1eV4f7roExKO2x4KaKvZOujMve05rvGg5VxF7VuN69uth-~Lyg7yVawCGNwWBt5qS-1IC-~4BXz7CWQq1T-eUJGOoHJaJ3q-tOI9aYOfi0-YO9yZuR3nxJBBN7rDQuGaFlwM1Uo1WKivQvxJPA0wntargng"
          }
          alt="User Image"
        />
      </div>
      <div className="ml-3">
        <h6 className="font-bold font-sans">{name}</h6>
        <div className="text-xs font-serif font-semibold">{description}</div>
      </div>
    </div>
  );
}

export default Profile;
