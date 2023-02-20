import { MouseEvent } from 'react';
import { VirusElement } from '../../types/ComponentsTypes';

// import {} from 'react';

import Code from '../../components/Code';

const Element = ({ code, filename, link, name, open = false }: VirusElement) => {
    const download = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Downloading : " + filename || name + "\nLink : " + link);
        e.currentTarget.blur();
    };

    return (
        <li>
            <span>+</span>

            <details open={open}>
                <summary>
                    <h2>{name}</h2>
                    <span>
                        <button type="button" onClick={download}>Download</button>
                        <span>&#60;</span>
                    </span>
                </summary>

                <div className="container">
                    <div className="subtitle">{filename || name}</div><hr />

                    <Code language="js" children={code} />
                </div>
            </details>
        </li>
    );
};

export default Element;
