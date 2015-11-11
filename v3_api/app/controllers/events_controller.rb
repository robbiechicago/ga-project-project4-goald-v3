class EventsController < ApplicationController

  def index
    @allevents = Event.where(:user_id => params[:user_id], :goal_id => params[:goal_id])
    @events = @allevents.where.not(event_datetime: nil)

    render json: @events
  end

  def create
    @event = Event.new(user_id: params[:user_id], goal_id: params[:goal_id], event_datetime: params[:event_datetime])

    if @event.save
      puts 'saved'
      # render json: @event, status: :created, location: @event
      
    else
      puts 'not saved'
      # render json: @event.errors, status: :unprocessable_entity
    end

  end
end
