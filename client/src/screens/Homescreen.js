import React from 'react'
import pizzas from './pizzasdata.js'
import Pizza from '../components/Pizza.js'

export default function Homescreen(){
	return(
<div>


<div className="row">
{pizzas.map(pizza=>{
	return<div className="col-md-4">
<div>
<Pizza pizza={pizza}/>
</div>
	</div>
})}
</div>

</div>

		)
}