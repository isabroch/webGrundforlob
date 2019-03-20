<div id="forside">
  <main id="columnMain">
    <a href="<?php if($page=='art1' or $page=='art2') {echo '.';}?>./firstArticle"><section id="article1">
        <div class="text">
          <h2>Ville du mistet din job til automatisering af
          grafiske&nbsp;work flow?</h2> <h3>Hverdag lærer man ny måde at automatisere deres workflow.</h3>
        </div>
      </section></a>

    <a href="<?php if($page=='art1' or $page=='art2') {echo '.';}?>./secondArticle"><section id="article2">
        <div class="text">
          <h2>Ville tryk dræbe verden?</h2> <h3>Emballage allerede udgør en tredje-del af verdens affald. Hvor dårlig
          er den grafiske verden for sundhedet af vores verden?</h3>
        </div>
      </section></a>

  </main>
  <aside id="columnSide">
    <?php include './partials/latestNews.php' ?>
  </aside>
</div>
