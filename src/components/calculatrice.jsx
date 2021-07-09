import React, { useState } from 'react';

const Calculatrice = () => {

    return (
        <form>
            <label>nb1</label>
            <input type="text" id="nb1" />
            <label>op</label>
            <select id="op">
                <option value="+"></option>
                <option value="-"></option>
                <option value="x"></option>
                <option value="/"></option>
            </select>
            <label>nb2</label>
            <input type="text" id="nb2" />
            <input type="submit" value="calculer"/>
            <input type="text" readOnly="true"/>         
        </form>
    );
}

export default Calculatrice