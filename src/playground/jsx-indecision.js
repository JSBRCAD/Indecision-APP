console.log('App.js is running!')

//if statements
//ternary operator
//logical and operator




const app = {
    tittle:" Indecision APP",
    subtitle:"Pur your life in the hands of a computer",
    options: []

};


const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = " ";
        initiate (); 
           }
        };

        const removeAll = () => {
            app.options = []
            initiate();            
        };

        const onMakeDecision = () =>{
            const randomNum = Math.floor(Math.random() * app.options.length) ;
            const option = app.options[randomNum];
            alert(option);
        };

        const appRoot = document.getElementById("app");

       
        const initiate = () =>{
            const template = ( 
                <div>
                    <h1>{app.tittle}</h1>
                    {(app.subtitle) && <p>subtitle: {app.subtitle}</p>}
                    <p>{app.options.length > 0 ? "Here are your options": "No options"}</p>
                    <p>{app.options.length}</p>
                    <button disabled = {app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
                    <button onClick={removeAll}>Remove All</button>
                    <ol>
                        {
                           app.options.map((option) =><li key={option}>Options: {option}</li>

                            )

                        }
                    </ol>
                    <form onSubmit={onFormSubmit}>
                        <input type="text" name="option"/>
                        <button>Add Option</button>
                    </form>
                </div>
            ); 

        ReactDOM.render(template,appRoot);

};


initiate (); 