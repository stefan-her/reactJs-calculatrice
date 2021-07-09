import React, { useState } from 'react';

const Calculatrice = () => {

    const [nbs, setNbs] = useState({nb1 : '', nb2 : ''});
    const [result, setResult] = useState('');
    const [op, setOp] = useState('+');

    const handelChange = (e) => {
        const {value, name} = e.target;

        if(true) {
            setNbs({
                ...nbs, //permet de ne pas perdre de valeur!!! c'est comme ça !!!
                [name]:value
            });
        }
    }

    const calcul = (e) => {
        e.preventDefault();

        setResult(result => {
            const v1 = parseFloat(nbs.nb1);
            const v2 = parseFloat(nbs.nb2);

            switch(op) {
                case '+' : return v1 + v2;
                case '-' : return v1 - v2;
                case '*' : return v1 * v2;
                case '/' : return (v2 !== 0) ? (v1 / v2) : "Division impossible";
            }
        });
    }

    return (
        <form onSubmit={calcul}>
            <label>nb1</label>
            <input type="text" name="nb1" onChange={(e) => handelChange(e)} value={nbs.nb1} />
            <label>op</label>
            <select id="op" onChange={(e) => setOp(e.target.value)} value={op}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">x</option>
                <option value="/">/</option>
            </select>
            <label>nb2</label>
            <input type="text" name="nb2" onChange={(e) => handelChange(e)} value={nbs.nb2} />
            <input type="submit" value="calculer"/>
            <input type="text" readOnly="readOnly" value={result}/>         
        </form>
    );
}

export default Calculatrice