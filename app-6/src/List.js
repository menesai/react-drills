import React from 'react';

const List = props =>(
<ul>
{
    props.response.map((item, index) => <li key={index}> {item}</li>)
}

</ul>


);



export default List