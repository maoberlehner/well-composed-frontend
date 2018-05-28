Feature: Home: Posts

Scenario: List posts

  Given I open the `home page`
  Then I should see a post list

Scenario: Load new current post

  Given the "Post" query returns a `default` response
  And I open the `home page`
  When I enter "1" in the post id field
  And I click on the load post button"
  Then the text "Mock Title" should be visible
