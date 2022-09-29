import { DefaultInputState } from '../DefautInputState/DefualtInputstate'
import { CheckBoxInput } from './CheckBoxInput/CheckBoxInput'

export const DropDown = () => {
    return (
        <div>
            <DefaultInputState input={CheckBoxInput} defaultCount={5} defaultValue={"ooßß"} />
        </div>
    )
}
