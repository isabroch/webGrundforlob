<header>
  <a id="logo" href="<?php if($page=='art1' or $page=='art2') {echo '.';}?>./"><div>
    <img src="<?php if($page=='art1' or $page=='art2') {echo '.';}?>./files/logo.svg" alt="The National Graphic News logo"> <h1 class="logoTop">THE NATIONAL</h1> <h1 class="logoBot">GRAPHIC NEWSPAPER</h1>
  </div>
  </a>

  <nav>
  <ul>
    <li><a href="<?php if($page=='art1' or $page=='art2') {echo '.';}?>./firstArticle" class="<?php if($page=='art1') {echo 'active';}?>">article 1</a></li>
    <li><a href="<?php if($page=='art1' or $page=='art2') {echo '.';}?>./secondArticle" class="<?php if($page=='art2') {echo 'active';}?>">article 2</a></li>
    <li><a href="<?php if($page=='art1' or $page=='art2') {echo '.';}?>./" class="<?php if($page=='home') {echo 'active';}?>">forside</a></li>
  </ul>
  </nav>
</header>
