import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private altCtrl: AlertController
    ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe =  this.recipeService.getRecipe(recipeId);
      //console.log(this.loadedRecipe);
    });
  }
  onDeleteRecipe() {
    this.altCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Delete',
        handler: () => {
          this.recipeService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alertEle => {
      alertEle.present();
    });
   
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

}
