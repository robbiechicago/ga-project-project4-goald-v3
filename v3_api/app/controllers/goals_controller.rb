class GoalsController < ApplicationController

  def index
    @goals = User.find(params[:user_id]).goals.distinct

    render json: @goals
  end





end
