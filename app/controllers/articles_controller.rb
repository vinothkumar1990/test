class ArticlesController < ApplicationController
	def index
    
@articles=Article.all


  end
 
  def show
    @articles = Article.find(params[:id])
  end
 
  def new
    @article = Article.new
  end
 def edit
  @article = Article.find(params[:id])
end
 
  def create
    @article = Article.new(article_params)
 
    if @article.save
      redirect_to @article
    else
      render 'new'
    end
  end
 def update
    @article = Article.find(params[:id])
 
    if @article.update(article_params)
      redirect_to @article
    else
      render 'edit'
    end
  end
 
  def destroy
    @article = Article.find(params[:id])
    @article.destroy
 
    redirect_to articles_path
  end
 def search
@articles=Article.where("open_date >= ? and open_date <= ?",params[:open_date], params[:open_dates]) 
 
 end
 def index1
  @articles=Article.all
 end
  def date
@articles = Article.where(["open_date LIKE ?","%#{params[:open_date]}%"]) 
 
 end
 def index2
  @articles=Article.all
 end
  def status

@articles = Article.where("open_date >= ? and open_date <= ?",params[:open_date], params[:open_dates]).where(["status LIKE ?","%#{params[:search]}%"])
 
 end
 

  
 
  private
    def article_params
      params.require(:article).permit(:name, :father_name, :open_date, :end_date, :amount,:address, :status)
    end
end
