import { ButtonIcon, Sidebar } from "@/component";


export function App() {

  return (
    <>
      <Sidebar />
      <section>
        <ButtonIcon iconName="icon-play" area="Play" type="is-white" />
        <ButtonIcon iconName="icon-play" area="Play" type="is-primary" />
      </section>
    </>
  )
}


