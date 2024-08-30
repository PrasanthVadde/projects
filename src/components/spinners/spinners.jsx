import { TailSpin} from 'react-loader-spinner'

export const CustomSpinner = (props)=>{
    return(
        <TailSpin
  visible={true}
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  wrapperStyle={{}}
  wrapperClass=""
  {...props}
  />
    )
}