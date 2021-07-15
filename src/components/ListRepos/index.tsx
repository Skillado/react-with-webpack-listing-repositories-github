import React, { useState, useEffect } from 'react'
import RepositoryItem from '../RepositoryItem/index'
import './styles.scss'

interface RepositoriesProps{
    id: number;
    full_name: string;
    description: string;
    html_url: string;

}
export default function RepositoryList() {

    const [repositories,setRepositories] = useState<RepositoriesProps[]>([]);

    useEffect(() => {
         async function getRepos(){
           await fetch("https://api.github.com/users/skillado/repos")
            .then(response => response.json())
            .then(repositories => setRepositories(repositories))
            console.log(repositories)
         }
         getRepos();
        }
    ,[])
    
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            
            <ul>
                {
                   repositories && repositories.map( repositories => <RepositoryItem key={repositories.id} repository={repositories}/>)   
                }
            </ul>

        </section>
    )
}
