import React from 'react';
import './styles.scss';

interface RepositoryItemProps {
  repository: {
    full_name: string;
    description: string;
    html_url: string;
  }
}

export default function RepositoryItem(props: RepositoryItemProps) {
  return( 
    <li>
        <strong>{props.repository.full_name ?? "empty" }</strong>
        <p>{props.repository.description ?? "empty"}</p>
        <a href={props.repository.html_url}>Acess repository</a>
    </li>
)
 
}