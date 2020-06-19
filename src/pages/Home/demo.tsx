import View from 'rax-view';
import {memo,createElement} from 'rax';

interface IListItemProps {
    data?:string;
    demoClick:(e:string)=> void
}

const List:Rax.FC<IListItemProps> = (props) =>{
    const {
        data,
        demoClick
    } = props
    
    let setS = () =>{
        demoClick('123')
    }

   
    return(
        <View>
            {data}
            <button onClick={setS}>修改</button>
        </View>
    )
}
export default memo(List);
