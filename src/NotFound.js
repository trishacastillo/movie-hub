import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">

	<main>
		<section className="section--image">
			<img src="https://cdn-images-1.medium.com/max/800/1*-Lv7y_W3qoO1fqsCii7jEA.gif" alt=""/>
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