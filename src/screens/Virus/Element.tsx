import { MouseEvent } from 'react';
import { VirusElement } from '../../types/ComponentsTypes';

import Code from '../../components/Code';

const Element = ({ code, filename, name, open = false }: VirusElement) => {
    const download = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (window.confirm("Download file")) {
            let a = document.createElement('a'),
                file = new Blob([code], { type: "octet/stream" }),
                url = URL.createObjectURL(file);
    
            document.body.appendChild(a);
            a.style.display = "none";
            a.href = url;
            a.download = filename || name;
            a.click();
    
            URL.revokeObjectURL(url);
            a.remove();
        }

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

                    <Code language={"js"} children={code} />
                </div>
            </details>
        </li>
    );
};

export default Element;
