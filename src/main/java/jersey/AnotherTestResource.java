package jersey;

import com.google.common.collect.ImmutableList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("anothertest")
@Produces(MediaType.APPLICATION_JSON + "; charset=utf-8")
public class AnotherTestResource {

   @GET
   @Path("all")
   public Object getAll() {
      return ImmutableList.of(
         "one",
         "two",
         "three"
      );
   }
}
