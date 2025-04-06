"use client"
import { use, useState } from "react";

interface OwnerRepoProps {
    avatar_url: string;
    name: string;
}

export function OwnerRepo({ avatar_url, name }: OwnerRepoProps) {
    const [show, setShow] = useState(false);
    return (
        <div>
            {show && (
                <>
                    <img
                        src={avatar_url}
                        alt="Foto do campeão"
                        width={48}
                        height={48}
                        style={{ borderRadius: 8, padding: 4 }}
                    />
                    <strong>{name}</strong>
                </>
            )}
            <button 
            style={{marginLeft:4}}
            onClick={() => setShow(!show)}>
                {show ? "Ocultar Criador" : "Mostrar Criador"}
            </button>

        </div>
    )
}