<section id="latestNews">

  <h2>Latest News</h2>

  <?php
    $url = 'articles.json'; //path to file
    $data = file_get_contents($url); //make the content a variable
    $articles = json_decode($data); //decode the json content

    foreach ((array) $articles as $article) :  ?>

  <a href="#"><article>
    <h3><?php echo $article->title; ?></h3>
    <address class="author"><?php echo $article->author; ?></address>
  </article></a>

  <?php endforeach; ?>

</section>
