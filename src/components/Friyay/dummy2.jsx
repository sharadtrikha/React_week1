import { memo } from 'react';

const Dummy2 = (props) => {

    console.log('Dummy2 loaded', props.id)


    return (
        <h4>Dummy2 loaded</h4>
    )
}

export default memo(Dummy2)