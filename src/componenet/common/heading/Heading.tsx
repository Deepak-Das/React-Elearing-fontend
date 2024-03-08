
interface Props {
  subtitle:string;
  title:string;
}
const Heading = ({ subtitle, title }:Props) => {
  return (
    <>
      <div id='heading'>
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
      </div>
    </>
  )
}

export default Heading
