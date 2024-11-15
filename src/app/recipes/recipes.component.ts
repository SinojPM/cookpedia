import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from '../sevices/api.service';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [HeaderComponent,SearchPipe,FormsModule,NgxPaginationModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  p: number = 1;
  allrecipes:any = []
  dummyAllRecipes:any = []
  searchKey:string = ""
  ngOnInit(){
    this.getAllrecipes()
  }

  constructor(private api:ApiService){}

  getAllrecipes(){
    this.api.getAllRecipeApi().subscribe((res:any)=>{
      this.allrecipes = res
      this.dummyAllRecipes=res
      console.log(this.allrecipes);
      
    })
  }

  filterRecipes(recipeType:string,recipeName:string){
    this.allrecipes=this.dummyAllRecipes.filter((item:any)=>item[recipeType].includes(recipeName))
  }
  
}
