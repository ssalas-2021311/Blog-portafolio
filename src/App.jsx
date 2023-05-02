import { useState } from 'react';
import './App.css';
import { ArticleList, ButtonList } from './components';
import data from './data/data';

function App() {
	const allCategories = [
		'Todo',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'Todo') {
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

	return (
		<>
			<div className='title'>
				<h1>
					MI <span>Blog</span>
				</h1>

				<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img id='portada'
								src='https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg'
								alt='imagen-header'
							/>
						</div>
						<div class="carousel-item">
							<img id='portada'
								src='https://nodenet.es/sites/default/files/2022-06/crear-un-blog-en-internet.png'
								alt='imagen-header'
							/>
						</div>
						<div class="carousel-item">
							<img id='portada'
								src='https://blog.scielo.org/es/wp-content/uploads/sites/3/2018/03/blogs.png'
								alt='imagen-header'
							/>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
			</div>

			<ButtonList categories={categories} filterCategory={filterCategory} />

			<ArticleList articles={articles} />
		</>
	);
}

export default App;
