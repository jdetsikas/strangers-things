import baseUrl from "./URL"

const DeletePost = ({setDeleting, targetId}) => {
    
    const handleDelete = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch( `${baseUrl}/posts/${targetId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        };
        
        setDeleting(false);
        location.assign("/posts");
    };
    
    return (
        <form onSubmit={handleDelete}>
            <p>Really Delete?</p>
            <button type="submit" >Confirm</button>
            <button onClick={ (event) => {event.preventDefault(); setDeleting(false)}}>Cancel</button>
        </form> );
};

export default DeletePost;