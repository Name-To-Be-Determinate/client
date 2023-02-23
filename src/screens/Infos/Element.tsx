import { MouseEvent } from 'react';

import { copyToClipbord } from '../../actions/posts';

const Element = ({ content, slug, name }: { content: string, slug: string, name?: string }) => {
    const copyText = (e: MouseEvent<HTMLButtonElement>) => {
        copyToClipbord(content);
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
                    {name ? <><div className="subtitle">{name}</div><hr /></> : ""}
                    <div style={{ padding: '6px 12px' }}>{content}</div>
                </div>
            </details>
        </li>
    );
};

export default Element;
