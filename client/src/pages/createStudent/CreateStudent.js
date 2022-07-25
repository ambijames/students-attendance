import React, {useState} from 'react';

const CreateStudent = () => {
    const [studentFields, setStudentFields] = useState([{
        name: '',
        isPresent: false
    }])
    return (
        <>
            <h1>Create A student</h1>
            <form>
                <div>
                <input
                    name='name'
                    placeholder='Name'
                />
                <input
                    name='active'
                    placeholder='Is Present?'
                />
                </div>
            </form>
        </>
        
    )
}

export default CreateStudent;