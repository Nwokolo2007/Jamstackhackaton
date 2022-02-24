export default function SignOutUser ({user}) {

    return (

   
  
       <div>
           <span>{user.email}</span>
      <a href="/api/auth/logout"><i class="fa fa-envelope-o nav-link disabled marg">
            <span class="badge badge-warning">Log Out</span>
          </i></a>
          </div>
     
 
    
    


    )
};