class StoresController < ApplicationController
	def index
    
@stores=Store.all
  end

 
  def show
    @store = Store.find(params[:id])
  end
 
  def new
    @store = Store.new
  end
 def edit
    @store = Store.find(params[:id])
  end
 
  def create
   @store = Store.new(store_params)

 
    if @store.save
      @store.update_column("jewele_no","j0000"+@store.id.to_s)
      redirect_to @store
    else
      flash[:error]=@store.errors.messages
      render 'new'
    end
  end
   def update
    @store = Store.find(params[:id])
 
    if @store.update(store_params)
      redirect_to @store
    else
      render 'edit'
    end
  end
  def stores_print
    
    @store = Store.find(params[:id])
    
    render :template => "/stores/print"
end
 def pending
  @stores=Store.where("status=?","Pending")
 end
  def complete
  @stores=Store.where("status=?","Complete")
 end
  def destroy
    @store = Store.find(params[:id])
    @store.destroy
 
    redirect_to stores_path
  end

  def index7
  @stores=Store.all
 end
  def status12

@stores = Store.where("loan_date >= ? and loan_date <= ?",params[:loan_date], params[:loan_dates]).where(["status LIKE ?","%#{params[:search]}%"])
 
 end
 
 
  private
    def store_params
      params.require(:store).permit(:jewele_no, :member_no,:avatar, :name, :sex, :father_name, :gender, :loan_date, :gold_description, :gold_total, :gold_cross_weight, :gold_net_weight, :total_amount, :loan_amount, :status, :loan_close_date,:closing_amount,:address,:mobile,:interest_rate,:duration_amount,:total_interest,:register_person,:closed_person)
    end
end






