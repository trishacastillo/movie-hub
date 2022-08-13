import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">

	<main>
		<section className="section--image">
			<img src="https://th.bing.com/th/id/R.db8ed17d964e198129fa8203c06d7bd6?rik=nH53ot5y%2bBvNCQ&riu=http%3a%2f%2fwww.sitesbay.com%2ffiles%2f404.gif&ehk=rAjITNLVYuiunk3y9AKDyM9HmSQiIKcyleBDNgJzsyw%3d&risl=&pid=ImgRaw&r=0" alt=""/>
		</section>
		<section className="section--content">

      <h2>404 not found</h2>
			<p>I have bad news for you</p>
			<p className="section--p">The page you are looking for might be removed or is temporarily unavailable</p>
      <Link to="/">Back to the homepage...</Link>

		</section>
	</main>
    </div>
  );
}
 
export default NotFound;