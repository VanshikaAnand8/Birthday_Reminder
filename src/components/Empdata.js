import React from 'react'


const Empdata = ({employee}) => {
    let currDate = new Date();
    let newDate = currDate.getDate();
    let newDate1 = newDate < 10 ? `0${newDate}` : `${newDate}`
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];
    
    let currentMonth = month[currDate.getMonth()];
    
    let actualDate = `${newDate1} ${currentMonth}`

    return employee.map(({id, name, dob, age, gender, image}) => {
        let empDOB = dob;
        if(empDOB === actualDate){
            return(
                <div key={id} className='person'>
                    <img src={image} alt={name}/>
                    <div className='emp_detail'>
                        <h4>{name}</h4>
                        <p>Gender: {gender}</p>
                        <p>{dob}</p>
                        <h4>Age: {age}</h4>
                    </div>
                </div>
            )
        }
        else{
            
            return null
        }


    })

   
}

export default Empdata
