import { MouseEvent } from 'react';
// import {  } from '../../types/ComponentsTypes';

// import {} from 'react';

const Element = ({ content, slug, title }: { content: string, slug: string, title?: string }) => {
    const copyText = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Copying text");
        e.currentTarget.blur();
    };

    return (
        <li>
            <span>+</span>

            <details>
                <summary>
                    <h2>{slug}</h2>

                    <span style={{ marginRight: '5px' }}>
                        <button type="button" onClick={copyText}>Copy</button>
                    </span>
                </summary>

                <div className="container">
                    {title ? <><div className="subtitle">{title}</div><hr /></> : ""}{content}
                </div>
            </details>
        </li>
    );
};

export default Element;
