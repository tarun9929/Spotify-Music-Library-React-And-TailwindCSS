import { useEffect , useState } from "react";
import axios from "axios";

export default function useSpotifyAccessToken() {{
    const [token , setToken] = useState(null);

    useEffect(() => {
        (async() => {
            try {
                const response = await axios.post("https://accounts.spotify.com/api/token" , {
                    grant_type: "client_credentials",  
                    client_id: import.meta.env.VITE_CLIENT_ID,
                    client_secret: import.meta.env.VITE_CLIENT_SECRET,                    
                } , {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded" 
                    }
                })

                const { access_token } = response.data;

                console.log(response.data)
                setToken(access_token);
            } catch (error) {
                console.log(error);
            }
        })();
    } , [])

    return token;
}}